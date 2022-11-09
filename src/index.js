import DateFixer from "./DateFixer";

try {
    if (window !== undefined) {
        window.DateFixer = DateFixer;
    }
} catch (e) {}

export default DateFixer;
