const selectLipsticks = `
   
SELECT 

 lipsticks.id AS lipstick_id,
 lipsticks.name,
 lipsticks.brand,
 lipsticks.color,
 lipsticks.finish,
 lipsticks.desc,
 lipsticks.model_image_url,
 lipsticks.buy_now_url,
 tags.id AS tag_id

 FROM lipsticks

INNER JOIN
    xref_lipstick_tags ON lipstick_id = lipsticks.id
   INNER JOIN
   tags ON tags.id = xref_lipstick_tags.tag_id

   `;

module.exports = selectLipsticks;
