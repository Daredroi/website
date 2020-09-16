(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{692:function(t,a,e){"use strict";e.r(a);var s=e(28),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"reading-local-manga"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-local-manga"}},[t._v("#")]),t._v(" Reading local manga")]),t._v(" "),e("p",[t._v("Follow the steps below to create local manga.")]),t._v(" "),e("ol",[e("li",[t._v("Create a folder named "),e("code",[t._v("local")]),t._v(" in Tachiyomi folder, which is located in the phone's "),e("strong",[t._v("internal storage")]),t._v(" or "),e("strong",[t._v("external SD card")]),t._v(".")]),t._v(" "),e("li",[t._v("Place manga inside "),e("code",[t._v("Tachiyomi/local")]),t._v(" folder.")]),t._v(" "),e("li",[t._v("You can then access the manga in "),e("Navigation",{attrs:{item:"browse"}}),t._v(" → "),e("strong",[t._v("Local source")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("If you add more chapters then you'll have to manually refresh the chapter list (by pulling down the list).")]),t._v(" "),e("p",[t._v("Supported chapter formats are folder with pictures inside (such as "),e("code",[t._v(".jpg")]),t._v(", "),e("code",[t._v(".png")]),t._v(", etc), "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(", "),e("code",[t._v("RAR")]),t._v("/"),e("code",[t._v("CBR")]),t._v(" and "),e("code",[t._v("EPUB")]),t._v(". But expect better performance with directories and "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(".\n"),e("el-alert",{attrs:{type:"warning",title:"Warning!","show-icon":"",closable:!1}},[t._v("Remember to give the app storage permissions on "),e("strong",[t._v("Android 6")]),t._v(" and newer.")])],1),t._v(" "),e("h2",{attrs:{id:"folder-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder Structure")]),t._v(" "),e("p",[t._v("Tachiyomi requires a specific folder structure for local manga to be correctly processed. Local manga will be read from the "),e("code",[t._v("Tachiyomi/local")]),t._v(" folder. Each manga must have a "),e("code",[t._v("Manga")]),t._v(" folder and a "),e("code",[t._v("Chapter")]),t._v(" folder. Images will then go into the chapter folder. See below for more information on archive files. You can refer to the following example:")]),t._v(" "),e("div",{staticClass:"guide"},[e("p",{staticClass:"title"},[t._v("EXAMPLE")]),e("div",{staticClass:"side-by-side"},[e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/sdcard/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\tManga Name\n\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\tch1\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("images")])])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tch2\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("images")])])]),t._v(" "),e("li",{staticClass:"file"},[t._v("cover.jpg")])])]),t._v(" "),e("li",[t._v("…")])])])]),t._v(" "),e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/storage/18F5-2C11/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\tManga Name\n\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\tch3\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("images")])])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tch4\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("images")])])])])]),t._v(" "),e("li",[t._v("…")])])])])])]),e("p",[t._v("Tachiyomi will see four chapters in a single manga.\nThe path to the folder with images must contain both the manga title and the chapter name (as seen above).")]),t._v(" "),e("div",{staticClass:"guide"},[e("figure",{staticClass:"centered"},[e("h4",[t._v("Example structure using the file manager")]),t._v(" "),e("p",[t._v("Here, the manga name is "),e("strong",[t._v("test")]),t._v(" so the file structure is "),e("code",[t._v("/Tachiyomi/local/test/ch1/images")]),t._v(".")]),t._v(" "),e("img",{attrs:{height:"300",src:t.$withBase("/help/guides/reading-local-manga/assets/LocalManga.jpg")}})])]),e("h2",{attrs:{id:"archive-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#archive-files"}},[t._v("#")]),t._v(" Archive Files")]),t._v(" "),e("p",[t._v("Archive files such as "),e("code",[t._v("ZIP")]),t._v("/"),e("code",[t._v("CBZ")]),t._v(" are supported but the folder structure inside is not. Any folders inside the archive file are ignored. You must place the archive inside the "),e("code",[t._v("Manga")]),t._v(" folder where the name will become the "),e("code",[t._v("Chapter")]),t._v(" title. All images inside the archive regardless of folder structure will become pages for that chapter.")]),t._v(" "),e("div",{staticClass:"guide"},[e("p",{staticClass:"title"},[t._v("ZIP EXAMPLE")]),e("ul",{staticClass:"file-tree"},[e("li",[t._v("\n\t\t\t/sdcard/Tachiyomi/local\n\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\tManga Name\n\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\tch1.zip\n\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("images")])])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tch2.zip\n\t\t\t\t\t\t\t"),e("ul",[e("li",[t._v("\n\t\t\t\t\t\t\t\t\tch2\n\t\t\t\t\t\t\t\t\t"),e("ul",[e("li",{staticClass:"file"},[t._v("images")])])])])]),t._v(" "),e("li",{staticClass:"file"},[t._v("cover.jpg")])])]),t._v(" "),e("li",[t._v("…")])])])])]),e("h2",{attrs:{id:"advanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),e("h3",{attrs:{id:"editing-local-manga-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editing-local-manga-details"}},[t._v("#")]),t._v(" Editing local manga details")]),t._v(" "),e("p",[t._v("It is possible to add details to local manga. Like manga from other catalogs, you add information about the manga such as the author, artist, description, and genre tags.")]),t._v(" "),e("p",[t._v("To import details along with your local manga, you have to create a json file. It can be named anything but it must be placed within the "),e("strong",[t._v("Manga")]),t._v(" folder. A standard file name is "),e("code",[t._v("details.json")]),t._v(". This file will contain the extended details about the manga in the "),e("code",[t._v("JSON")]),t._v(" format. You can see the example below on how to build the file. Once the file is there, the app should load the data when you first open the manga or you can pull down to refresh the details.")]),t._v(" "),e("p",[t._v("You can copy the following example and edit the details as needed:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Author"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"artist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Artist"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genre"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_status values"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 = Unknown"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 = Ongoing"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2 = Completed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3 = Licensed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"using-a-custom-cover-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-cover-image"}},[t._v("#")]),t._v(" Using a custom cover image")]),t._v(" "),e("p",[t._v("It is also possible to use a custom image as a cover for each local manga.")]),t._v(" "),e("p",[t._v("To do this, you only need to place the image file, that needs to be named\n"),e("code",[t._v("cover.jpg")]),t._v(", in the root of the manga folder. The app will then use your\ncustom image in the local source listing.")])])}),[],!1,null,null,null);a.default=n.exports}}]);