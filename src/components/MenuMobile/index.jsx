import styles from "./MenuMobile.module.css"
import QuickAccessMenu from "../QuickAccessMenu"
import CategoriesMenu from "./CategoriesMenu"

export default function MenuMobile() {
  return (
    <>
      <CategoriesMenu />
      <QuickAccessMenu />
    </>
  );
}
