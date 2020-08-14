import React,{Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import newyork from './images/newyork.png'
class Header extends Component{
    render(){
        return(
            <>
             <header className="header row">
                 <div className="col-xl-2 col-md-3 col-lg-2 pb-5">
                 <img id="newyorkimg" src={newyork} alt=""/>
                 </div>
                 <div className="col-xl-4 col-md-4 col-lg-5 pb-0 webName">
                 <span><b>DAILY FOCUS</b></span>
                 </div>
                
                 <div className="col-xl-6 col-md-5 col-lg-5">
                  <ul>
                  <li><NavLink exact to="/">HOME</NavLink></li>
                  <li><NavLink to="/world">WORLD</NavLink></li>
                  <li><NavLink to="/art">ART</NavLink></li>
                  <li><NavLink to="/science">SCIENCE</NavLink></li>

                  </ul>
                     
                 </div>
             </header>
           
            </>
        )
    }
  }
export default withRouter(Header);
/*
<ul>
<li><NavLink exact to="/" >HOME</NavLink></li>
<li><NavLink to="/world">WORLD</NavLink></li>
<li><NavLink to="/art">ART</NavLink></li>
<li><NavLink to="/science">SCIENCE</NavLink></li>

</ul>*/
/*
<Nav>
<Nav.Item>
<Nav.Link href="/">HOME</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href="/world">WORLD</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href="/art">ART</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href="/science">SCIENCE</Nav.Link>
</Nav.Item>
</Nav>
*/