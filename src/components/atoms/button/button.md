
## Props
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>*children</td>
      <td>node</td>
      <td></td>
      <td>The content of the button.</td>
    </tr>
    <tr>
      <td>as</td>
      <td>'button' | 'a'</td>
      <td>'button'</td>
      <td>The component used for the root node.</td>
    </tr>
    <tr>
      <td>color</td>
      <td>
      'black'
      | 'gray'
      | 'orange' 
      | 'white'
      </td>
      <td>'black'</td>
      <td>The color of the component.</td>
    </tr>
    <tr>
      <td>size</td>
      <td>'small' | 'medium'</td>
      <td>'medium'</td>
      <td>The size of the button.</td>
    </tr>
    <tr>
      <td>fullWidth</td>
      <td>bool</td>
      <td>false</td>
      <td>If true, the button will take up the full width of its container.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>bool</td>
      <td>false</td>
      <td>If `true`, the button will be disabled.</td>
    </tr>
    <tr>
      <td>href</td>
      <td>string</td>
      <td></td>
      <td>The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node.</td>
    </tr>
  </tbody>
</table>

Any other props supplied will be provided to the root element 
