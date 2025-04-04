<script lang="ts">
  let { value = $bindable(), min, max, ...props } = $props()
  let stringValue: string = $state('')
  let isValid: boolean = $state(false)

  function textToNumber(text: string): number {
    return +text.replace(',', '.')
  }

  function numberToText(num: number): string {
    return num.toString()
  }

  function updateValue() {
    value = textToNumber(stringValue)
    isValid = validate()
  }

  function validate() {
    return !Number.isNaN(value) && stringValue.length > 0 && value >= min && value <= max
  }
</script>

<input
  id="HoursWorkedInput"
  type="text"
  bind:value={stringValue}
  oninput={updateValue}
  class:input-success={isValid}
  class:input-error={!isValid}
  {...props}
/>
