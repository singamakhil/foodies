"use client";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { ShareMeal } from "@/lib/action";
import MealFormSubmit from "@/components/meals/meals-form-submit";
import { useActionState } from "react";

export default function ShareMealPage() {
  const [state, formAction] = useActionState(ShareMeal, { errors: {} });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
              {state.errors?.creator && (
                <span className={classes.error}>{state.errors.creator}</span>
              )}
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
              {state.errors?.creator_email && (
                <span className={classes.error}>
                  {state.errors.creator_email}
                </span>
              )}
            </p>
          </div>

          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            {state.errors?.title && (
              <span className={classes.error}>{state.errors.title}</span>
            )}
          </p>

          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
            {state.errors?.summary && (
              <span className={classes.error}>{state.errors.summary}</span>
            )}
          </p>

          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
            {state.errors?.instructions && (
              <span className={classes.error}>{state.errors.instructions}</span>
            )}
          </p>

          <ImagePicker label="Your image" name="image" />
          {state.errors?.image && (
            <span className={classes.error}>{state.errors.image}</span>
          )}

          <p className={classes.actions}>
            <MealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
