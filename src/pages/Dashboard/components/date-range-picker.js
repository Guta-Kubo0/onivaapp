import "./custom-theme.less";
import DateRangePicker from "rsuite/DateRangePicker";
import "rsuite/dist/rsuite-no-reset.min.css";

function CustomDateRangePicker() {
  return (
    <DateRangePicker
      appearance="subtle"
      placeholder="Select Date Range"
      style={{ width: 230, color: "#4744a6" }}
    />
  );
}

export default CustomDateRangePicker;
