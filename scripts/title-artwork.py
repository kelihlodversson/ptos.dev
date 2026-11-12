"""Generate the title from pTOS/EmuTOS's actual 8x16 system-font pixels.
Glyph data: bios/fnt_st_8x16.c, Copyright (C) 2001-2021
The EmuTOS development team. GPL-2.0-or-later; see LICENSE.
Only glyphs needed for the decorative title are included.
"""
from pathlib import Path
GLYPHS = {' ': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'M': [0, 0, 198, 198, 238, 238, 254, 214, 214, 198, 198, 198, 198, 198, 0, 0], 'T': [0, 0, 126, 126, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 0, 0], 'e': [0, 0, 0, 0, 0, 60, 126, 102, 102, 126, 96, 96, 126, 62, 0, 0], 'p': [0, 0, 0, 0, 0, 124, 126, 102, 102, 102, 102, 102, 126, 124, 96, 96], 'r': [0, 0, 0, 0, 0, 124, 126, 102, 96, 96, 96, 96, 96, 96, 0, 0], 't': [0, 0, 0, 24, 24, 126, 126, 24, 24, 24, 24, 24, 30, 14, 0, 0], 'y': [0, 0, 0, 0, 0, 102, 102, 102, 102, 102, 102, 126, 62, 6, 126, 124]}
LABEL = "Meet pTerry"
path = " ".join(
    f"M{i*8+x} {y}h1v1h-1z"
    for i, char in enumerate(LABEL)
    for y, row in enumerate(GLYPHS[char])
    for x in range(8) if row & (128 >> x)
)
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{len(LABEL)*8}" height="16" viewBox="0 0 {len(LABEL)*8} 16" shape-rendering="crispEdges">
<!-- System font glyphs: Copyright (C) 2001-2021 The EmuTOS development team; GPL-2.0-or-later. See LICENSE and scripts/title-artwork.py. -->
<path d="{path}" fill="#000"/>
</svg>
'''
Path(__file__).resolve().parents[1].joinpath("public/images/pterry-title.svg").write_text(svg)
