# Generate @font-face CSS rules

import os
import re
from typing import List

# /* sarabun-regular - latin_thai */
# @font-face {
#   font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
#   font-family: "Sarabun";
#   font-style: normal;
#   font-weight: 400;
#   src: url("/fonts/sarabun-regular.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
# }


def generate_fontface(font_dir: str) -> List[str]:
    fontface = []
    for root, dirs, files in os.walk(font_dir):
        for file in files:
            if file.endswith('.woff2'):
                font_name = re.sub(r'\.woff2$', '', file)
                # Extract last part after - of font name for styling
                font_style = font_name.split('-')[-1]

                # Check if font style is italic
                isItalic = "italic" in font_style

                fontWeight = re.search(r'(\d+)', font_style)

                # Remove style from font name
                font_name = re.sub(rf'-{font_style}$', '', font_name)

                fontface.append(f'''
                  /* {font_name}-{font_style} - latin_thai */
                  @font-face {{
                    font-display: swap; 
                    font-family: "{font_name.capitalize()}";
                    font-style: {'italic' if isItalic else 'normal'};
                    font-weight: {fontWeight.group(0) if fontWeight else '400'};
                    src: url("/fonts/{file}") format("woff2");
                }}
                ''')
    return fontface


if __name__ == '__main__':
    # Generate fontface for all fonts in current directory
    # Output to a file
    with open('fontface.css', 'w') as f:
        f.write(''.join(generate_fontface('.')))

        f.close()
