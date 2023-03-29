import fontsList from "@/fonts/fonts";
import styles from "./page.module.css";
import { LoremIpsum } from "@/components/LoremIpsum/LoremIpsum";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>VisbyCF Fonts</h1>

      {fontsList.map(({ font, name }) => (
        <LoremIpsum key={name} font={font.className} fontName={name} />
      ))}
    </main>
  );
}
