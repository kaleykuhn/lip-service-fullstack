module.exports = function selectAllCards(userId) {
   return `
   SELECT 
        users.id AS user_id, 
        users.email,
        xref_user_tags.tag_id 
    FROM 
        users 
    INNER JOIN 
        xref_user_tags ON user_id = users.id 
    INNER JOIN 
        tags ON tags.id = xref_user_tags.tag_id 
    WHERE 
        users.id = '${userId}'
    `;
};
