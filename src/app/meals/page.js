import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/dummyServer/meals';

export default async function MealsPage() {
  const meals = await getMeals();
console.log("mealsZ",meals)

  return (
      <>
        <header className={classes.header}>
          <h1>
            Delicious meals, created{' '}
              {console.log("ddddKKKKKKK")}
            <span className={classes.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun!
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">
              Share Your Favorite Recipe
            </Link>
          </p>
        </header>
        <main className={classes.main}>
          <MealsGrid meals={meals} />
        </main>
      </>
  );
}
