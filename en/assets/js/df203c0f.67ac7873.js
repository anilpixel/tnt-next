"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9924],{26393:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var l=t(2784),s=t(84277),c=t(92896),r=t(56533),n=t(58004);function g(e){var a=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(c.Z,{to:a.permalink},l.createElement("h2",null,a.title)),a.description&&l.createElement("p",null,a.description))}function o(e){var a,t=e.tag,o=(a=(0,r.c2)().selectMessage,function(e){return a(e,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:o(t.docs.length),tagName:t.name});return l.createElement(s.Z,{title:i,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(c.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.docs.map((function(e){return l.createElement(g,{key:e.id,doc:e})})))))))}}}]);