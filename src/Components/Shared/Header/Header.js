import React from 'react';
import logo from '../../../images/logo/list.png'
const Header = () => {
    return (
        <div class="navbar bg-sky-800 font-bold">
  <div class="navbar-start ">
    <div class="dropdown ">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Todo</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Completed
            
          </a>
          
        </li>
        <li><a>Calender</a></li>
      </ul>
    </div>
    <img src={logo} alt="" />
    <a class="btn btn-ghost normal-case text-xl">Todo Manager</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Todo</a></li>
      <li tabindex="0">
        <a>
          Completed
          
        </a>
        
      </li>
      <li><a>Calender</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Add task</a>
  </div>
</div>
    );
};

export default Header;