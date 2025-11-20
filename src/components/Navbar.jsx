import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="navbar  shadow-md bg-black/40 backdrop-blur-md text-white flex to-0% left-0 right-0 scale-z-100">
 <div className='w-13/10 max-auto flex justify-between items-center '>
   <div className="navbar-start gap-4 items-center">
    <img className='w-[90px] h-[30px] font-grif object-cover' src="https://play-lh.googleusercontent.com/V5RwaePf3q967ztfSdQzpJT6z925UMFFGoSI_EnVcd9cR1t1JUvU7Nxuo7NXz2oYA4Y" alt="" />
  <div>
    <ul className='flex gap-4'>
      <li><a className='text-base font-semibold uppercase' href="">Home</a></li>
      <li><a className='text-base font-semibold uppercase' href="">TV SHOW</a></li>
      <li><a className='text-base font-semibold uppercase' href="">MOVIE</a></li>
      <li><a className='text-base font-semibold uppercase' href="">NEW</a></li>
    </ul>
  </div>

  </div>
  <div className="navbar-center hidden lg:flex">
   
  </div>
  <div className="navbar-end flex gap-3">
   <label className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within: border-yellow-400 transition- duration-300">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>

<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-[35px] ml-4 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>
  </div>
 </div>
  {/* movie c */}
  <div>

  </div>
</div>
<div>
  <div className="carousel w-full h-[90vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://th.bing.com/th/id/R.907ac1eabd37eb505f8d1b4c33af6b52?rik=Tb09JOgmYKpmpg&pid=ImgRaw&r=0"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://th.bing.com/th/id/R.1956c3d46f46471715bdf9034635112a?rik=Px%2fPiafxVvie0Q&pid=ImgRaw&r=0"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://www.ageratingjuju.com/wp-content/uploads/2023/01/Harry-Potter-Movies-In-Order-.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
{/* movie cellection */}
</div>
<div>
  <div className="card bg-base-100 w-96 shadow-sm top-5">
  <figure>
    <img
      src="https://th.bing.com/th/id/R.055c2b1ce621706cf3f6086cbd4f46f0?rik=GfObUcaM%2frKaAA&pid=ImgRaw&r=0"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Horry potter
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
     <img src="" alt="" />
    </div>
  </div>

</div>
</div>
<div>
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     jk Rowling
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>
{/* movie 3 */}
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      j.K Rowling 6
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* movie 4 */}
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      j.k ROWLING 3

      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://www.adazing.com/wp-content/uploads/2022/12/Harry-Potter-Book-Covers-Half-Blood-Prince-uk.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    J.K ROWLING HARRY POTTER
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* movie animesion 1 */}
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/naruto.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    NARUTO
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* Animetion 2  */}
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://www.boredpanda.com/blog/wp-content/uploads/2022/01/anime-movies-5-61e673d82e369__700.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     ASILENT VOICE the movie
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* animision 3 */}
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc2Mjg3NDkyMDg0MTQ3Mzkw/top-10-best-anime-movies.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      ANIME BEST bbbbb
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://www.boredpanda.com/blog/wp-content/uploads/2022/01/anime-movies-17-61e6775842d37__700.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     the secret world of ARRIETTY
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    </>
  )
}
