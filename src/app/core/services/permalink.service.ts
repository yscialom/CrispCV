import { Injectable, computed, Signal, inject, signal } from '@angular/core';
import { ResumeDataService } from './resume-data.service';
import { Experience, Education, Project, Volunteering } from '../models/resume.models';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export type EntryType = 'experience' | 'education' | 'project' | 'volunteering';

export interface PermalinkEntry {
  id: number;
  type: EntryType;
  fragment: string;
  route: string;
  originalItem: Experience | Education | Project | Volunteering;
}

@Injectable({
  providedIn: 'root',
})
export class PermalinkService {
  private resumeData = inject(ResumeDataService);
  private router = inject(Router);

  public readonly permalinkMap: Signal<Map<number, PermalinkEntry>>;
  public readonly itemToEntryMap: Signal<
    Map<Experience | Education | Project | Volunteering, PermalinkEntry>
  >;
  public readonly activeFragment = signal<string | null>(null);

  constructor() {
    this.permalinkMap = computed(() => this.generatePermalinkMap());
    this.itemToEntryMap = computed(() => {
      const map = new Map<Experience | Education | Project | Volunteering, PermalinkEntry>();
      for (const entry of this.permalinkMap().values()) {
        map.set(entry.originalItem, entry);
      }
      return map;
    });

    // Track fragment changes
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        const tree = this.router.parseUrl(this.router.url);
        this.activeFragment.set(tree.fragment);
      });
  }

  public resolveId(id: number): { route: string; fragment: string } | null {
    const entry = this.permalinkMap().get(id);
    if (!entry) return null;
    return { route: entry.route, fragment: entry.fragment };
  }

  public getEntryById(id: number): PermalinkEntry | undefined {
    return this.permalinkMap().get(id);
  }

  public getEntryByItem(
    item: Experience | Education | Project | Volunteering,
  ): PermalinkEntry | undefined {
    return this.itemToEntryMap().get(item);
  }

  // Helper for tests
  public getPermalinkMap(): Map<number, PermalinkEntry> {
    return this.permalinkMap();
  }

  // Helper for tests
  public getEntryByFragment(fragment: string): PermalinkEntry | undefined {
    for (const entry of this.permalinkMap().values()) {
      if (entry.fragment === fragment) return entry;
    }
    return undefined;
  }

  private generatePermalinkMap(): Map<number, PermalinkEntry> {
    const experiences = this.resumeData.experiences() || [];
    const educations = this.resumeData.educations() || [];
    const projects = this.resumeData.profile().personalProjects || [];
    const volunteerings = this.resumeData.profile().volunteering || [];

    const allItems = [
      ...experiences.map((e) => ({ item: e, type: 'experience' as const, date: e.startDate })),
      ...educations.map((e) => ({ item: e, type: 'education' as const, date: e.startDate })),
      ...projects.map((p) => ({
        item: p,
        type: 'project' as const,
        date: p.startDate || '0000-00-00',
      })),
      ...volunteerings.map((v) => ({ item: v, type: 'volunteering' as const, date: v.startDate })),
    ];

    // Sort chronologically (oldest first)
    allItems.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });

    const map = new Map<number, PermalinkEntry>();

    allItems.forEach((wrapper, index) => {
      const id = index + 1;
      const fragment = this.generateFragment(wrapper.item, wrapper.type, id);
      const route = this.getRouteByType(wrapper.type);

      map.set(id, {
        id,
        type: wrapper.type,
        fragment,
        route,
        originalItem: wrapper.item,
      });
    });

    return map;
  }

  private generateFragment(
    item: Experience | Education | Project | Volunteering,
    type: EntryType,
    id: number,
  ): string {
    let rawString = '';

    if (type === 'experience') {
      const exp = item as Experience;
      rawString = `${exp.company}-${exp.startDate}-${id}`;
    } else if (type === 'education') {
      const edu = item as Education;
      rawString = `${edu.institution}-${edu.degree}-${edu.startDate}-${id}`;
    } else if (type === 'project') {
      const proj = item as Project;
      rawString = `${proj.name}-${id}`;
    } else if (type === 'volunteering') {
      const vol = item as Volunteering;
      rawString = `${vol.organization}-${id}`;
    }

    return this.slugify(rawString);
  }

  private getRouteByType(type: EntryType): string {
    switch (type) {
      case 'experience':
        return '/experience';
      case 'education':
        return '/education';
      case 'project':
      case 'volunteering':
        return '/about';
      default:
        return '/';
    }
  }

  private slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  }
}
