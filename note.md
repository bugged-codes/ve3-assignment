created context store for all images and data along with module and tab as properties.

components => 1.empower women img, 2.7*7 grid icon, 3.reusable module page.
Home => comp-1 + comp-2 + text + button to page2
page2 => comp-1 + comp-2 + button to home + comp-3s

added animation class toggle with ternary operator and useState to toggle button click animation on 2nd page.
all 5 module pages as reusable components 


tabsNav component->tabsNav wrapper->active-nav+(visible-tabCard->tabCard component->tabCard-Container->(img+text))



{/* <p>showing {filterdData.length} results</p> */}
				<ul className="searchBar-list">
					{/* {querry &&
						filterdData &&
						filterdData.map((item) => {
							console.log('Mapped items are: ', item);
							return (
								<li className="search-listItem" key={item.id}>
									{item}
								</li>
							);
						})} */}