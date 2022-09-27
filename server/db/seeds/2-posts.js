exports.seed = function (knex) {
  return knex('posts').insert([
    {
      id: 1,
      uploader_id: '2',
      category: 'Found',
      title: 'Pink beanie found on Sumner Beach',
      date_lostOrFound: new Date().toDateString(),
      date_posted: Date.now(),
      description:
        'Please comment if you think it might be yours - tell me the brand on the tag inside',
      image_url:
        'https://static.zara.net/photos///2022/V/0/1/p/3739/002/620/2/w/1920/3739002620_6_1_1.jpg?ts=1638522328799',
      location: 'Christchurch',
    },
    {
      id: 2,
      uploader_id: '3',
      category: 'Lost',
      title: 'School hat',
      date_lostOrFound: new Date().toDateString(),
      date_posted: Date.now(),
      description: 'It is red and looks like the picture',
      image_url:
        'https://www.thewarehouse.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-twl-master-catalog/default/dw343e4d2e/images/hi-res/55/E2/R1814457_20.jpg?sw=765&sh=765',
      location: 'Brooksfield School',
    },
    {
      id: 3,
      uploader_id: '3',
      category: 'Lost',
      title: 'Water bottle',
      date_lostOrFound: new Date().toDateString(),
      date_posted: Date.now() - 1000 * 60 * 60 * 24 * 28,
      description: 'Have you seen my water bottle?',
      image_url:
        'https://www.bivouac.co.nz/media/catalog/product/c/a/cam_chute-mag-1l-vac-ins_1515402001_16_1.jpg?width=636&height=636&store=default&image-type=image',
      location: 'Auckland',
    },
    {
      id: 4,
      uploader_id: '3',
      category: 'Lost',
      title: 'I lost my cat again. I think she hates me.',
      date_lostOrFound: new Date().toDateString(),
      date_posted: Date.now() - 1000 * 60 * 60 * 24 * 31,
      description: 'Im really sad about it',
      image_url:
        'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/DCTM_Penguin_UK_DK_AL697473_RGB_PNG_namnse.jpg',
      location: 'Burwood, Christchurch',
    },
  ])
}
