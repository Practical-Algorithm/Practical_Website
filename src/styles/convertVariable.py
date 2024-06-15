# Convert exported variable from figma to css variable

import json
import re

# Example
# --1.Colormodes-Componentcolors-Components-Applicationnavigation-nav-item-icon-fg_active: var(--_Primitives-Colors-Gray(darkmode)-200);
# --nav-item-icon-fg_active: var(--gray-dark-mode--200);

alias = {
    "1.Colormodes-Componentcolors-Components-Applicationnavigation-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Primary-": "",
    "1.Colormodes-Componentcolors-Components-Headersections-": "",
    "1.Colormodes-Componentcolors-Components-Footers-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Tertiaryerror-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Tertiarycolor-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Tertiary-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Secondaryerror-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Secondarycolor-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Secondary-": "",
    "1.Colormodes-Componentcolors-Components-Buttons-Primaryerror-": "",
    "1.Colormodes-Componentcolors-Utility-Warning-": "",
    "1.Colormodes-Componentcolors-Utility-Success-": "",
    "1.Colormodes-Componentcolors-Utility-Error-": "",
    "1.Colormodes-Componentcolors-Utility-Gray-": '',
    "1.Colormodes-Componentcolors-Utility-Brand-": '',


    "_Primitives-Colors-Gray(darkmode)": "gray-dark-mode-",
    "_Primitives-Colors-Gray(lightmode)": "gray-light-mode-",
    "_Primitives-Colors-Brand": "brand-",
    "_Primitives-Colors-Base": "base--",
    "_Primitives-Colors-Error": "error-",
    "_Primitives-Colors-Warning": "warning-",
    "_Primitives-Colors-Success": "success-",

}

tailwind_config = {

}

# Read file from dark-style.txt
with open('dark-style.txt', 'r') as file:
    data = file.read()

    # Read each line
    data = data.split('\n')
    for i in range(len(data)):
        # If empty line, skip
        if data[i] == '':
            continue
        for key in alias:
            data[i] = data[i].replace(key, alias[key])

        if "1." in data[i]:
            continue

        # Remove extra space
        data[i] = re.sub(' +', ' ', data[i])

        print(data[i])

        # Create tailwind config
        # Extract first part of the variable
        variableFirstPart = data[i].split(':')[0]
        variable = variableFirstPart.split('--')[1]
        variableDepth = variable.split('-')

        current = tailwind_config
        for var in variableDepth[:-1]:
            if var not in current:
                current[var] = {}
            current = current[var]
        current[variableDepth[-1]
                ] = f'rgba(var({variableFirstPart}), <alpha-value>)'

# Convert tailwind config to json
with open('tailwind.json', 'w') as file:
    json.dump(tailwind_config, file, indent=2)
