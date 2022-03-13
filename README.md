## Migration from Jekyll to GatsbyJS

### Comments

BEFORE:
```
<!-- This was invisible -->
```

AFTER:
```
{/* This is invisible */}
```

### Only self-closing HTML tags

All HTML tags need a corresponding closing tag or at least MUST be self-closing.
Adding a `/` before the closing `>` makes it easily work.

BEFORE:
```
<br>

<hr>

<img src="...">

<input type="..">
```

AFTER:
```
<br/>
<hr/>

<img src="..."/>

<input type="..">
```

### className

Use the attribute `className` instead of `class`.

BEFORE:
```
<span class="help-block"/>
```

AFTER:
```
<span className="help-block"/>
```
