// import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';


// export const LeftBarData = [
//   {
//     title: 'Home',
//     icon: <HomeIcon/>,
//     link:'/',
//   },
//   {
//     title: 'Find Work',
//     icon: <SearchIcon/>,
//     link:'/Jobs',
//   },
//   {
//     title: 'My Jobs',
//     icon: <CollectionsBookmarkIcon/>,
//     link:'/User',
//   },
//   {
//     title: 'Messages',
//     icon: <MarkChatUnreadIcon/>,
//     link:'/chat',
//   },
// ];



// const LeftBar = () => {
//   return (
//     <div className='leftbar'>
//       <ul className='sidebarlist'>
//         {LeftBarData.map((val, key) => {
//           return(
//             <li className='row'  key = {key} onClick={()=>{
//               window.location.pathname = val.link;
//             }}>

//               <div id='icon'>{val.icon}</div>
//               <div id='nav-title'>{val.title}</div>
             
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default LeftBar


