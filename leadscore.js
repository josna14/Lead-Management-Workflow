
let company_size = inputData.company_size; 
let budget = inputData.budget; 
let industry = inputData.industry; 
let urgency = inputData.urgency; 


let leadScore = 0;


if (company_size === "1-50 employees") leadScore += 5;
else if (company_size === "51-200 employees") leadScore += 10;
else if (company_size === "201-1000 employees") leadScore += 20;
else if (company_size === "1000+ employees") leadScore += 25;


if (budget === "Less than $10,000") leadScore += 5;
else if (budget === "$10,000 - $50,000") leadScore += 10;
else if (budget === "$50,001 - $100,000") leadScore += 20;
else if (budget === "More than $100,000") leadScore += 30;


if (industry === "Technology") leadScore += 20;
else if (industry === "Finance") leadScore += 15;
else if (industry === "Healthcare") leadScore += 25;
else if (industry === "Retail") leadScore += 10;
else if (industry === "Other") leadScore += 5;


if (urgency === "Immediate (within 1 month)") leadScore += 30;
else if (urgency === "Short-term (1-3 months)") leadScore += 20;
else if (urgency === "Medium-term (3-6 months)") leadScore += 10;
else if (urgency === "Long-term (6+ months)") leadScore += 5;


output = { leadScore: leadScore };
