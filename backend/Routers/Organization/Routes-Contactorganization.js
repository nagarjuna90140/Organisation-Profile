

const express = require("express")
const router = express.Router()

const ContactOrganization = require("../../Controller/Organizaation/Controller-ContactOrganization")



router.post('/createcontact',ContactOrganization.createContact)
router.get('/allContact',ContactOrganization.getallContactDetailes)
router.get('/:id',ContactOrganization.getContactOne)
router.put('/:id',ContactOrganization.contactUpdate)
router.delete('/:id',ContactOrganization.contactDelete)

module.exports = router



