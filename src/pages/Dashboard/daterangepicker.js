import "./my-theme.less";
import DateRangePicker from "rsuite/DateRangePicker";
import "rsuite/dist/rsuite-no-reset.min.css";

function CustomDateRangePicker() {
  return (
    <DateRangePicker
      appearance="default"
      placeholder="Select Date Range"
      style={{ width: 230 }}
    />
  );
}

export default CustomDateRangePicker;
