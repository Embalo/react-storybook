
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
      <td>type</td>
      <td>'string'</td>
      <td>'text'</td>
      <td>Type of the `input` element. It should be <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types" target="_blank">a valid HTML5 input type</a>.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>any</td>
      <td></td>
      <td>The value of the input element, required for a controlled component.</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>string</td>
      <td></td>
      <td>The short hint displayed in the input before the user enters a value.</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>func</td>
      <td></td>
      <td>Callback fired when the value is changed.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>bool</td>
      <td></td>
      <td>If `true`, the `input` element will be disabled.</td>
    </tr>
  </tbody>
</table>

Any other props supplied will be provided to the root element.
