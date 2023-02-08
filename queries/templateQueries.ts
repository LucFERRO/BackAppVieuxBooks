const getTemplate = "SELECT * FROM template"

const getTemplateById = "SELECT * FROM template WHERE id = $1"

const addTemplate = "INSERT INTO template (name, mail, description, image) VALUES ($1, $2, $3, $4)"

const updateTemplate = "UPDATE template SET name = $1, mail = $2, description = $3, image = $4 WHERE id = $5"

const deleteTemplate = "DELETE FROM template WHERE id = $1"

const getCustomerTemplate = "SELECT * FROM template WHERE customerid = $1"

module.exports = {
    getTemplate,
    getTemplateById,
    addTemplate,
    updateTemplate,
    deleteTemplate,
    getCustomerTemplate
}