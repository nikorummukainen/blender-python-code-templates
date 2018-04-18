# blender-python-code-templates

Python snippets for Blender python code.

> [GitHub repository link](https://github.com/nikorummukainen/blender-python-code-templates)

> [Addon at VScode Marketplace](https://marketplace.visualstudio.com/items?itemName=blenderfreetimeprojects.blender-python-code-templates)

> [Blender addon for turning files/blender texteditor content into .json snippets](https://github.com/nikorummukainen/blender-snippet-generator)

## Snippets

|Prefixes|Description|
|--------|-----------|
|info&nbsp;addon|Blender addon info|
|license&nbsp;gnu|GNU license|
|license&nbsp;mit|MIT license|
|keymap&nbsp;item|keymap item [More Info](https://docs.blender.org/api/current/bpy.types.KeyMapItem.html#bpy.types.KeyMapItem)|
|keymaps|Register and unregister keymaps|
|menu|Menu|
|operator|Operator function class, without any imports or added functions|
|operator&nbsp;modal|Modal operator function, without any imports or added functions|
|operator&nbsp;modal&nbsp;draw|Modal operator draw function, without any imports or added functions|
|panel|Panel|
|pie&nbsp;menu|Pie Menu|
|register|Register and Unregister Module|
|template&nbsp;addon|Example of addon for adding object|
|template&nbsp;background&nbsp;job|Example of script that shows how you can run blender from the command line (in background mode with no interface) to automate tasks, in this example it creates a text object, camera and light, then renders and/or saves it. This example also shows how you can parse command line options to scripts.|
|template&nbsp;batch|Example of exporting each selected object into its own file|
|template&nbsp;bmesh|Example of to get mesh representation for bmesh from edit-mode and updating it back after bmesh operation.|
|template&nbsp;bmesh|Example of to get mesh representation for bmesh from active object and updating it back after bmesh operation.|
|template&nbsp;keyingset|Example of generating Keying Set|
|template&nbsp;nodes|Example of Implementation of custom nodes from Python|
|template&nbsp;driver|Example of script defining functions to be used directly in drivers expressions to extend the builtin set of python functions.|
|template&nbsp;script|Example of loading script relative to current blend file. This stub runs a python script relative to the currently open blend file, useful when editing scripts externally.|
|template&nbsp;gamelogic|Example of gamelogic module. This module can be accessed by a python controller with its execution method set to 'Module'|
|template&nbsp;gamelogic|Example of Simple gamelogic python script.|
|template&nbsp;gamelogic|Example of gamelogic script this must be assigned to a python controller where it can access the object that owns it and the sensors/actuators that it connects to.|
|template&nbsp;operator|Example of Template for file export operator, operator exports data from blender to .txt file|
|template&nbsp;operator|Example of Template for file import operator, operator imports data from .txt to blender data|
|template&nbsp;operator|Example of operator involving bmesh for creating and adding object to scene|
|template&nbsp;operator|Example of Operator template for editing mesh UV's with bmesh|
|template&nbsp;operator|Example of Blender modal operator function with imports, main function, register, unregister and testcall|
|template&nbsp;ui&nbsp;list|Example of ui list template with adding it to blender with example panel|
|template&nbsp;ui&nbsp;list|Example of simple ui list class with some filtering and bpy import|
|template&nbsp;ui&nbsp;menu|Example of ui menu|
|template&nbsp;ui&nbsp;simple&nbsp;panel|Example of ui panel class with import and register|
|template&nbsp;ui&nbsp;panel|Example of ui panel class ui panel is created with examples of columns, buttons, rows, properties, with import and register, |
|template&nbsp;ui&nbsp;pie&nbsp;menu|Example of 3d viewport pie menu|
|template&nbsp;dynamic&nbsp;enum|This example script demonstrates a dynamic EnumProperty with custom icons.|
|template&nbsp;ui&nbsp;previews|This example script demonstrates how to place a custom icon on a button menu entry.|

## Contribution Notes

If adding or editing a snippet's prefix or description, to keep from having to edit the above table, you can generate it using the documentation_helper script, just `npm run table` and it will write a `TABLE.md` file with the above table so you can just copy and paste it to here. The `TABLE.md` file has been added to the `.gitignore` so it won't get accidently committed.

## Release Notes

### 0.9.0 beta
now snippets include templates for Blender python api

### 0.9.1
removed unnecessary newlines from templates.

### 0.9.4
added link to marketplace page to README.md
added github repository to package.json
added link to github repository to README.md
added link to snippet generator addon github repository to README.md

new snippets:
mit license

-----------------------------------------------------------------------------------------------------------

# Thanks
Alan for his [Blender VS Code Debugger](https://github.com/alanscodelog/blender-debugger-for-vscode) addon, it's awesome!

Ideasman42 and others who have contributed to [the Blender Wiki](https://wiki.blender.org) for providing instructions on [how to build Blender as python module](https://wiki.blender.org/index.php/User:Ideasman42/BlenderAsPyModule). Now my linter understands Blender.

Jacques Lucke's awesome Blender addon: [Code Autocomplete](https://www.blendermarket.com/products/code-autocomplete).

Blender developers! for providing the awesome package known as Blender and the python code templates.