import $ from 'jquery';
import 'select2';
import '../../_helpers/js/dropdownPosition/select2-dropdownPosition';

function select() {
  $('#custom-select').select2({
    theme: 'classic',
    width: '281px',
    minimumResultsForSearch: -1,
    dropdownPosition: 'below',
    // eslint-disable-next-line
    templateResult: function (data) {
      if (!data.id) {
        return data.text;
      }
      const parts = data.text.split('|');
      // eslint-disable-next-line
      return $('<span class="data-section">' + parts[0] +
        '</span><span class="divider"></span><span class="data-section">' + parts[1] + '</span><span class="divider"></span><span class="data-section">' + parts[2] + '</span>');
    },
    // eslint-disable-next-line
    templateSelection: function (data) {
      const parts = data.text.split('|');
      // eslint-disable-next-line
      return $('<span class="data-section">' + parts[0] + '</span><span class="divider"></span><span class="data-section">' + parts[1] + '</span><span class="divider"></span><span class="data-section">' + parts[2] + '</span>');
    },
  });
}
export default select;
