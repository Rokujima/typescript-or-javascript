const Company = require('../models/company');

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    const savedCompany = await company.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCompany = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!updatedCompany) {
          return res.status(404).json({ error: 'Company not found' });
        }
        res.json(updatedCompany);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
          return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.deleteCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndRemove(req.params.id);
        if (!company) {
          return res.status(404).json({ error: 'Company not found' });
        }
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
