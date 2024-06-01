# change font filename to remove version

import os
import re


def change_font_filename(font_dir):
    for root, dirs, files in os.walk(font_dir):
        for file in files:
            if file.endswith('.woff2'):
                # remove version of format '-v..-latin_thai-'
                new_file = re.sub(r'-v\d+-latin_thai-', '-', file)
                os.rename(os.path.join(root, file),
                          os.path.join(root, new_file))
                print(f'Changed {file} to {new_file}')


if __name__ == '__main__':
    change_font_filename('.')
