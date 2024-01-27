import classes from './page.module.css'
export default function MealDetailsPage() {
  return (
      <>
        <header className={classes.header}>
          <div className={classes.image}>
            {/*<image fill/>*/}
          </div>
            <div className={classes.headerText}>
                <h1>Title </h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${'Email'}`}>NAME</a>
                </p>
                <p className={classes.summary}>summary</p>
            </div>
        </header>
        <main>
            {/*<p className={classes.instructions} dangerouslySetInnerHTML={{*/}
            {/*    --html '...',*/}
            {/*}}></p>*/}

        </main>
      </>);
}


