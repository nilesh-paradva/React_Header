import '../../../App.css'

const MenuCom = ({menusItem}) => {
    
    return(
        <div className="col-8">
            <div className="menu">
                <ul className='list-menu'>
                    {
                        menusItem.map((ItemList) => {
                            return(
                                <li key={ItemList}><a href="#">{ItemList}</a></li>
                            )
                        })
                    }

                    {/* <li><a href="#">{menusItem[3]}</a></li>
                    <li><a href="#">{menusItem[1]}</a></li>
                    <li><a href="#">{menusItem[2]}</a></li>
                    <li><a href="#">{menusItem[3]}</a></li>
                    <li><a href="#">{menusItem[4]}</a></li>
                    <li><a href="#">{menusItem[5]}</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default MenuCom