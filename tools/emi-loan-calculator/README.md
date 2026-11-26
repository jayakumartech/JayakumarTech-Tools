# EMI & Loan Calculator v1.0

A mobile-friendly Indian loan EMI calculator for JayakumarTech Tools.

## Features
- Monthly EMI for monthly reducing-balance loans
- Principal, total interest and total repayment summary
- Month-by-month amortization schedule
- Search repayment schedule by month/year
- CSV export of repayment schedule
- Compare an alternative interest rate and tenure
- Dark/light theme; browser-only calculations

## Formula
For monthly rate `r`, principal `P` and number of monthly payments `n`:
`EMI = P × r × (1+r)^n / ((1+r)^n − 1)`.
For a zero-interest loan, EMI is `P / n`.

## Important limitations
This is an estimate, not a lender quotation or financial advice. It assumes a fixed annual rate divided by 12, equal monthly payments and a standard reducing balance. It excludes processing fees, insurance, taxes, prepayments, floating-rate resets, broken-period interest and lender-specific rounding. Actual lender schedules may differ.
