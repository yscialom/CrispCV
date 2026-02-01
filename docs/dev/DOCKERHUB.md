# CrispCV - Simple & Elegant Developer Résumé

CrispCV is a modern, high-performance, and fully customizable single-page application (SPA) designed to showcase your professional profile, experience, and education.

Built with **Angular 21**, **Signals**, and **Zoneless** change detection, it offers a crisp user experience and a clean, maintainable codebase.

## 🚀 Quick Start

Run the latest version of CrispCV with a single command:

```bash
docker run -d -p 8080:80 yankelscialom/crispcv:latest
```

Access your résumé at `http://localhost:8080`.

## ⚙️ Configuration

CrispCV is designed to be easily customized. To use your own data:

1.  **Clone the repository**: `git clone https://github.com/yscialom/CrispCV.git`
2.  **Edit your profile**: Modify `config/profile.en_US.ts` (and other locales as needed).
3.  **Customize the theme**: Adjust `config/_colors.scss` and `config/_spacing.scss`.
4.  **Build your own image**:
    ```bash
    docker build -t my-resume -f build/Dockerfile .
    docker run -d -p 8080:80 my-resume
    ```

## ✨ Key Features

- **Modern Angular Stack**: Leverages the latest Angular features for optimal performance.
- **Dark/Light Theme**: Built-in support for theme switching.
- **Multilingual**: Easy localization support.
- **Responsive**: Beautifully rendered on desktop and mobile devices.
- **Deep Linking**: Share specific experience or education entries with unique permalinks.
- **Print Friendly**: Optimized for PDF export and printing.

## 📄 Documentation

For detailed information on configuration, deployment, and development, visit the [GitHub repository](https://github.com/yscialom/CrispCV).

## 📄 License

This project is licensed under the GNU General Public License v2.0.
