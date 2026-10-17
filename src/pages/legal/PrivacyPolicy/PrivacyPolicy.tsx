import styles from '../document.module.css';

import DocumentTitle from '../components/DocumentTitle';

const PrivacyPolicy = () => {
  return (
    <section className={styles.wrapper}>
      <title>Privacy Policy - Quizly</title>
      <DocumentTitle title="Privacy Policy" />
      {/*
          A real document can be inserted here as text, or parsed from Markdown
          with react-markdown or any other lib and rendered.
        */}
      <div className={styles.document}>
        <section aria-labelledby="cat-sleep-title">
          <h2 id="cat-sleep-title" className={styles.chapterTitle}>
            1. The Official Cat Nap Regulations
          </h2>
          <ol className={styles.points}>
            <li>
              Domestic cats sleep for roughly 12 to 18 hours a day.
              The position of Chief Relaxation Officer is already taken.
            </li>
            <li>
              Cats rest in short bursts throughout the day, sometimes napping
              for just ten minutes. Even breaks need their own breaks.
            </li>
            <li>
              Kittens and senior cats usually sleep more than other adult cats.
              Every age group has its own charging schedule.
            </li>
            <li>
              Cats often choose warm, safe, elevated places to sleep.
              The top shelf counts as a room with a view.
            </li>
            <li>
              Cats may rotate their favourite sleeping spots. Yesterday's
              perfect blanket can lose its title to a cardboard box.
            </li>
          </ol>
        </section>

        <section aria-labelledby="cat-language-title">
          <h2 id="cat-language-title" className={styles.chapterTitle}>
            2. The Art of Feline Diplomacy
          </h2>
          <ol className={styles.points}>
            <li>
              Slow blinking often signals relaxation and trust.
              A friendly feline message can be delivered with a single look.
            </li>
            <li>
              An upright tail during an approach often accompanies a friendly
              greeting. Cats have their own flag for a good mood.
            </li>
            <li>
              When a cat rubs its cheek against a person, it leaves its scent
              behind. Think of it as adding someone to a trusted contacts list.
            </li>
            <li>
              Showing a belly can signal trust, but it is not necessarily an
              invitation for a belly rub. Always read the access conditions.
            </li>
            <li>
              Ear position offers clues about a cat's mood: relaxed ears and
              ears pinned back send different signals. The translator is built in.
            </li>
          </ol>
        </section>

        <section aria-labelledby="cat-habits-title">
          <h2 id="cat-habits-title" className={styles.chapterTitle}>
            3. Paws, Blankets, and Household Rituals
          </h2>
          <ol className={styles.points}>
            <li>
              Kittens knead with their front paws while nursing to help milk
              flow. Feline massage training starts early.
            </li>
            <li>
              Some cats keep kneading soft surfaces into adulthood.
              Your blanket has officially joined the feline biscuit factory.
            </li>
            <li>
              Scratching helps cats shed the worn outer layers of their claws.
              A manicure is part of the daily schedule.
            </li>
            <li>
              Scratching leaves scent marks as well as visible ones.
              A scratching post doubles as a feline noticeboard.
            </li>
            <li>
              Cats that share a friendly bond may groom each other.
              A shared grooming session is part of their social life.
            </li>
          </ol>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
