

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
      <td>value</td>
      <td>date object</td>
      <td></td>
      <td>The value of the input element, required for a controlled component.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>bool</td>
      <td></td>
      <td>If `true`, the `input` element will be disabled.</td>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>bool</td>
      <td></td>
      <td>If `true`, the `input` element will be read-only.</td>
    </tr>
  </tbody>
</table>

Any other props supplied will be provided to the <a href="https://reactdatepicker.com/" target="_blank">DatePicker</a> component.
