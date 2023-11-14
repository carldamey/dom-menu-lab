// Menu data structure
const menuLinks = [
	{text: "about", href: "/about"},
	{
		text: "catalog",
		href: "#",
		subLinks: [
			{text: "all", href: "/catalog/all"},
			{text: "top selling", href: "/catalog/top"},
			{text: "search", href: "/catalog/search"},
		],
	},
	{
		text: "orders",
		href: "#",
		subLinks: [
			{text: "new", href: "/orders/new"},
			{text: "pending", href: "/orders/pending"},
			{text: "history", href: "/orders/history"},
		],
	},
	{
		text: "account",
		href: "#",
		subLinks: [
			{text: "profile", href: "/account/profile"},
			{text: "sign out", href: "/account/signout"},
		],
	},
]

let subLinksArr

// Task 1.0
const mainEl = document.querySelector("main")

// Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)"

// Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// Task 1.3
mainEl.classList.add("flex-ctr")

// Task 2.0
const topMenuEl = document.getElementById("top-menu")

// Task 2.1
topMenuEl.style.height = "100%"

// Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Task 2.3
topMenuEl.classList.add("flex-around")

// Task 3.0
// menuLinks array copied to script above

// Task 3.1
menuLinks.forEach(link => {
	const newLink = document.createElement("a")
	newLink.setAttribute("href", link.href)
	newLink.setAttribute("onclick", "return false")
	newLink.innerText = link.text
	topMenuEl.appendChild(newLink)
})

// Task 4.0
const subMenuEl = document.getElementById("sub-menu")

// Task 4.1
subMenuEl.style.height = "100%"

// Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// Task 4.3
subMenuEl.classList.add("flex-around")

// Task 4.4
subMenuEl.style.position = "absolute"

// Task 4.5
subMenuEl.style.top = "0"

// Task 5.0
// menuLinks array updated according to instructions

// Task 5.1
const topMenuLinks = document.querySelectorAll("A")
let showingSubMenu = false

// Task 5.2
topMenuEl.addEventListener("click", function (event) {
	event.preventDefault()
	if (event.target.tagName !== "A") return

	// Task 5.3
	if (event.target.classList.contains("active")) {
		event.target.classList.remove("active")
		showingSubMenu = false
		subMenuEl.style.top = "0"
		return
	}

	// Task 5.4"
	topMenuLinks.forEach(link => link.classList.remove("active"))

	// Task 5.5
	event.target.classList.add("active")

	// Task 5.6
	showingSubMenu = true
	if (event.target.innerText === "ABOUT") showingSubMenu = false
	else if (event.target.innerText === "CATALOG") {
		subLinksArr = menuLinks[1].subLinks
	} else if (event.target.innerText === "ORDERS") {
		subLinksArr = menuLinks[2].subLinks
	} else if (event.target.innerText === "ACCOUNT") {
		subLinksArr = menuLinks[3].subLinks
	}

	// Task 5.7
	if (showingSubMenu) {
		buildSubMenu(subLinksArr)
		subMenuEl.style.top = "100%"
	} else {
		subMenuEl.style.top = "0"
		mainEl.innerHTML = "<h1>about</h1>"
	}
})

// Task 5.8
function buildSubMenu(subLinksArr) {
	subMenuEl.innerHTML = ""
	subLinksArr.forEach(subLink => {
		newSubLink = document.createElement("a")
		newSubLink.setAttribute("href", subLink.href)
		newSubLink.setAttribute("onclick", "return false")
		newSubLink.innerText = subLink.text
		subMenuEl.appendChild(newSubLink)
	})
}

// Task 6.0
subMenuEl.addEventListener("click", event => {
	event.preventDefault()
	if (event.target.tagName !== "A") return

	// Task 6.1
	showingSubMenu = false
	subMenuEl.style.top = "0"

	// Task 6.2
	topMenuLinks.forEach(link => link.classList.remove("active"))

	//Task 6.3
	mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`
})
