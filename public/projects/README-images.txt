Responsive image variants (optional, recommended)

Add optimized variants for each project screenshot to enable the <picture> srcset:

The Last Todo
- /projects/lasttodo-800.webp
- /projects/lasttodo-1200.webp
- /projects/lasttodo-2000.webp
- /projects/lasttodo-800.avif
- /projects/lasttodo-1200.avif
- /projects/lasttodo-2000.avif
Fallback already present: /projects/lasttodopng.png (2500x1336)

The Zoo
- /projects/zooapp-800.webp
- /projects/zooapp-1200.webp
- /projects/zooapp-2000.webp
- /projects/zooapp-800.avif
- /projects/zooapp-1200.avif
- /projects/zooapp-2000.avif
Fallback already present: /projects/zooapp.png (2486x1330)

Tips to generate
- Use Squoosh (web) or Squoosh CLI, or any image tool to export WebP and AVIF.
- Keep aspect ratio 16:9. Suggested widths: 800, 1200, 2000.
- Target file sizes: ~100–250 KB each variant.

You can ship only WebP if preferred; AVIF is optional. The <img> fallback remains the PNG.
