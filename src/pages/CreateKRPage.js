import React from 'react'
import KRFormPage from './KRFormPage'

export const CreateKRPage = () => {
    return (
        <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <main className={classes.content}>
        <Toolbar />
        <KRFormPage />
      </main>
    </div>
    )
}
