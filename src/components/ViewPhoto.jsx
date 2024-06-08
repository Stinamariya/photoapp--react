import React, { useState } from 'react';
import NavBar from './NavBar';

const ViewPhoto = () => {
    const [data, setData] = useState(
        [
            {
              "albumId": 1,
              "id": 1,
              "title": "accusamus beatae ad facilis cum similique qui sunt",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            
            
            
              
            {
              "albumId": 26,
              "id": 1294,
              "title": "aut aliquam iusto",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/a9bb71"
            },
            {
              "albumId": 26,
              "id": 1295,
              "title": "sequi corrupti nesciunt consequuntur",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/3ee755"
            },
            {
              "albumId": 26,
              "id": 1296,
              "title": "cupiditate rerum voluptates id soluta culpa",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/8a73ae"
            },
            {
              "albumId": 26,
              "id": 1297,
              "title": "odit ea non cupiditate quasi sed",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/bfdd4c"
            },
            {
              "albumId": 26,
              "id": 1298,
              "title": "occaecati perspiciatis quisquam molestiae voluptatem",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/6d85b6"
            },
            {
              "albumId": 26,
              "id": 1299,
              "title": "doloribus consequatur eligendi et vel quia assumenda est",
              "url": "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
              "thumbnailUrl": "https://via.placeholder.com/150/66fa07"
            },
            {
              "albumId": 26,
              "id": 1300,
              "title": "deleniti praesentium suscipit error voluptatem",
              "url": "https://via.placeholder.com/600/26d668",
              "thumbnailUrl": "https://via.placeholder.com/150/26d668"
            },
            
              
            
              
            {
              "albumId": 76,
              "id": 3783,
              "title": "omnis porro quis placeat quod",
              "url": "https://via.placeholder.com/600/24610",
              "thumbnailUrl": "https://via.placeholder.com/150/24610"
            },
            {
              "albumId": 76,
              "id": 3784,
              "title": "accusamus est laborum omnis mollitia commodi",
              "url": "https://via.placeholder.com/600/571b6e",
              "thumbnailUrl": "https://via.placeholder.com/150/571b6e"
            },
            {
              "albumId": 76,
              "id": 3785,
              "title": "consequuntur quas illum alias",
              "url": "https://via.placeholder.com/600/98f1c9",
              "thumbnailUrl": "https://via.placeholder.com/150/98f1c9"
            },
            {
              "albumId": 76,
              "id": 3786,
              "title": "modi fuga neque aut molestias vel",
              "url": "https://via.placeholder.com/600/6856a7",
              "thumbnailUrl": "https://via.placeholder.com/150/6856a7"
            },
            {
              "albumId": 76,
              "id": 3787,
              "title": "sed qui doloremque culpa",
              "url": "https://via.placeholder.com/600/ab567",
              "thumbnailUrl": "https://via.placeholder.com/150/ab567"
            },
            {
              "albumId": 76,
              "id": 3788,
              "title": "at amet distinctio maxime aliquam",
              "url": "https://via.placeholder.com/600/d9592b",
              "thumbnailUrl": "https://via.placeholder.com/150/d9592b"
            },
            {
              "albumId": 76,
              "id": 3789,
              "title": "odio reiciendis aliquid officia",
              "url": "https://via.placeholder.com/600/29c5fd",
              "thumbnailUrl": "https://via.placeholder.com/150/29c5fd"
            },
            {
              "albumId": 76,
              "id": 3790,
              "title": "eum et ab",
              "url": "https://via.placeholder.com/600/b5b059",
              "thumbnailUrl": "https://via.placeholder.com/150/b5b059"
            },
            {
              "albumId": 76,
              "id": 3791,
              "title": "illo quas mollitia aliquam saepe molestiae et",
              "url": "https://via.placeholder.com/600/2d87d6",
              "thumbnailUrl": "https://via.placeholder.com/150/2d87d6"
            },
            {
              "albumId": 76,
              "id": 3792,
              "title": "nemo vel cupiditate officia corporis",
              "url": "https://via.placeholder.com/600/6299f6",
              "thumbnailUrl": "https://via.placeholder.com/150/6299f6"
            },
            {
              "albumId": 76,
              "id": 3793,
              "title": "pariatur adipisci ex soluta quia voluptatem dicta",
              "url": "https://via.placeholder.com/600/f3cf6a",
              "thumbnailUrl": "https://via.placeholder.com/150/f3cf6a"
            },
            {
              "albumId": 76,
              "id": 3794,
              "title": "voluptatem qui aut quia consequatur omnis ducimus rerum",
              "url": "https://via.placeholder.com/600/c9fbcf",
              "thumbnailUrl": "https://via.placeholder.com/150/c9fbcf"
            },
            {
              "albumId": 76,
              "id": 3795,
              "title": "quibusdam qui odit",
              "url": "https://via.placeholder.com/600/dbbb3b",
              "thumbnailUrl": "https://via.placeholder.com/150/dbbb3b"
            },
            {
              "albumId": 76,
              "id": 3796,
              "title": "quia et officia odit doloremque et fuga",
              "url": "https://via.placeholder.com/600/85d3f9",
              "thumbnailUrl": "https://via.placeholder.com/150/85d3f9"
            },
            {
              "albumId": 76,
              "id": 3797,
              "title": "repellendus ut delectus dolorem esse",
              "url": "https://via.placeholder.com/600/33d3c2",
              "thumbnailUrl": "https://via.placeholder.com/150/33d3c2"
            },
            {
              "albumId": 76,
              "id": 3798,
              "title": "sequi explicabo labore et aut sit incidunt voluptatem qui",
              "url": "https://via.placeholder.com/600/7bb15",
              "thumbnailUrl": "https://via.placeholder.com/150/7bb15"
            },
            {
              "albumId": 76,
              "id": 3799,
              "title": "ut est nisi saepe sapiente",
              "url": "https://via.placeholder.com/600/281600",
              "thumbnailUrl": "https://via.placeholder.com/150/281600"
            },
            {
              "albumId": 76,
              "id": 3800,
              "title": "cupiditate laboriosam pariatur sit saepe aut qui omnis enim",
              "url": "https://via.placeholder.com/600/8bc230",
              "thumbnailUrl": "https://via.placeholder.com/150/8bc230"
            },
            {
              "albumId": 77,
              "id": 3801,
              "title": "impedit rerum et inventore ratione rerum nam quibusdam eligendi",
              "url": "https://via.placeholder.com/600/6d6586",
              "thumbnailUrl": "https://via.placeholder.com/150/6d6586"
            },
            {
              "albumId": 77,
              "id": 3802,
              "title": "illo quia accusamus eveniet qui ad",
              "url": "https://via.placeholder.com/600/af42e4",
              "thumbnailUrl": "https://via.placeholder.com/150/af42e4"
            },
            {
              "albumId": 77,
              "id": 3803,
              "title": "delectus dignissimos occaecati quisquam minima porro omnis voluptatem",
              "url": "https://via.placeholder.com/600/c24ebc",
              "thumbnailUrl": "https://via.placeholder.com/150/c24ebc"
            },
            {
              "albumId": 77,
              "id": 3804,
              "title": "maiores suscipit similique doloribus omnis ullam aut",
              "url": "https://via.placeholder.com/600/99c13f",
              "thumbnailUrl": "https://via.placeholder.com/150/99c13f"
            },
            {
              "albumId": 77,
              "id": 3805,
              "title": "architecto nobis cupiditate explicabo eligendi esse ut labore officia",
              "url": "https://via.placeholder.com/600/909394",
              "thumbnailUrl": "https://via.placeholder.com/150/909394"
            },
            {
              "albumId": 77,
              "id": 3806,
              "title": "dolorum molestias repellendus amet earum",
              "url": "https://via.placeholder.com/600/903753",
              "thumbnailUrl": "https://via.placeholder.com/150/903753"
            },
            {
              "albumId": 77,
              "id": 3807,
              "title": "laborum enim quia",
              "url": "https://via.placeholder.com/600/b47099",
              "thumbnailUrl": "https://via.placeholder.com/150/b47099"
            },
            {
              "albumId": 77,
              "id": 3808,
              "title": "voluptate dolor est",
              "url": "https://via.placeholder.com/600/80bd35",
              "thumbnailUrl": "https://via.placeholder.com/150/80bd35"
            },
           
              
           
          ]
        );

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1><center>VIEW PHOTO</center></h1>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
  <img src={value.url} height="250px"class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.thumbnailUrl}</p>
  </div>
</div>
                                </div>
                                }
                            )
                             
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPhoto;
