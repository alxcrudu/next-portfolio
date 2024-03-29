import { useRouter } from "next/router";
import * as styles from "./styles";

const LangSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    router.push(router.asPath, undefined, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      className={styles.select}
    >
      <option className={styles.option} value="en">
        🇺🇸 En
      </option>
      <option className={styles.option} value="ro">
        🇷🇴 Ro
      </option>
    </select>
  );
};

export default LangSwitcher;
