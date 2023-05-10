# Page flow plugin

This plugin allows you to extend the GOV.UK Prototyping Kit (from v13 +) and create visual representations of user journeys within your instance.

There is currently a need for some manual additions but the intention is to automate as much as possible in the future and provide a UI wizard to generate the required lists for pages and user journeys.

## Installation

To install via NPM:

`npm install page-flow-plugin --save`

When installed within the context of the GOVUK Prototype kit (v13 and above), this should expose all required methods and assets. Additional steps are currently required as detailed below to have the plugin work as expected.

## The goal of the project

The plugin intends to serve three main functions:

1. Page List - Produce a visual list of pages within the prototype (an index)
2. Page Flow - String together high level visual flows for various user scenarios - an ordered linear representation of a set of specified pages
3. Page Overview - Provide an overview page for each unique screen, this allows us to add context, UR notes, design goals, details of iterations and user needs etc. which might otherwise need a designer present

## Setup steps

The core functions required to produce the three page types are included at installation but need some additional items to work.

### Create routes for the pages

First we must create routes to our pages so that Express can handle the request and pass required data to the functions within the package.

You can choose how you wish to resolve the routes but an example is included below. Consider using this in your projects `route.js` file:

`const {renderPageIndex, pageListRoute} = require('page-flow-plugin')

router.get([`/discovery/v1/page-flow/`], (req, res) => {
    res.render('layouts/page-flow.html', {
        pageFlow: pages,
        sprint: verNum
    })
})`

## Create HTML files to use in your routes

When we set up our routes, we need to render a particular file - this step covers creating that file.

## Create the data
Ideally, these steps would be automatically and perhaps they will be at some point but for the moment, there is a need to manually curate JSON files to represent the pages that we have in our prototype. This is fairly laborious and it might be worth considering at this point whether investing the required time to produce dynamic flows is worth the investment of time and effort.  

### Page Data
This is used to generate the index of pages.

### User Flow Data
This is used to generate visual user flows and provide greater detail to the page overview.

## Additional customisation

### Styling 

## Changelog

- v2.0.0 : Potentially breaking changes, uses phases and sprints and an updated series of references

