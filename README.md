# New Decaf

### About

New Decaf is a React based landing page - celebrating the new and growing trend of independant coffee makers creating great decaf coffee. The home page is a simple discovery page with selected information. The catalogue page **will be** connected to a searchable database so that new coffees can be found and filtered easily

## Pages


```
index     | /          | live
catalogue | /cataloge  | WIP
```

### Deployment

Deployment : standard/basic deployment via vercel [https://new-decaf.vercel.app/](https://new-decaf.vercel.app/)

### Build Notes

Images are still needing to be sized and hosted, the following tables reference what sizes are currently in use, new images should match these where possible, or new visual QA will need to happen if these change.

```
Hero
    - xsmall   : 572px, 294px
    - small    : 767px, 394px
    - medium   : 991px, 509px
    - large    : 1199px, 616px
    - xlarge   : 1440px, 740px

Bean of the week && Ways to Brew
    - xsmall   : 252px, 350px
    - small    : 320px, 400px
    - medium   : 300px, 300px
    - large    : 420px, 420px
    - xlarge   : 460px, 460px

Hall of Fame (cards)
    - xsmall   : 216px, 216px
    - small    : 200px, 200px
    - medium   : 280px, 280px
    - large    : 310px, 310px
    - xlarge   : 320px, 320px
```

*Image sizes - as a single source of truth, always use the values in the appropriate .scss file*