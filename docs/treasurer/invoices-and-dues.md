# Invoices and dues reports

## Create an invoice

1. Find the member's approved row in `{Current Invoice Plan}`.
2. Confirm the customer, invoice date, due date, membership type, line items, rates, discounts, total, and any hold note.
3. In Zoho Invoice, select the existing customer. Do not create a duplicate for a spelling variation.
4. Enter the approved dates and line items. Preserve the standard notes, payment instructions, terms, and template unless the plan specifies a change.
5. Save as Draft. Verify the assigned identifier (for example, `INV-XXX`), customer, total, dates, and Draft status.
6. Update `{Current Invoice Plan}` and the current-year Zoho action log with the identifier, execution status, timestamp, and result.

## Mark a draft invoice as sent without emailing

Use this only when explicitly authorized.

1. Recheck the exact invoice, customer, and amount.
2. Select **Mark As Sent**, not an email-send action.
3. Verify the detail page shows Sent and that no email was delivered.
4. Record `Marked as Sent in Zoho only; invoice email not sent` in the appropriate record and action log.

## Correct a prior-period dues description

When an approved correction affects only a dues-line description:

1. Identify the exact invoice from `{Current Invoice Plan}` and verify its invoice identifier, customer, and Zoho ID.
2. Edit only the affected item description. Do not change the item, rate, discount, total, dates, customer, or status unless separately authorized.
3. Save; never use a send action.
4. Verify the revised description and unchanged status, then record the correction in the plan and action log.

## Export a dues summary

1. In Zoho Invoice, open the Customer Balance Summary report.
2. Use the approved active-member filter and the approved columns: Customer Name, Member Type, Customer Email, Mobile Phone, Invoiced Amount, Amount Received, and Closing Balance.
3. Use the approved layout and include the explanatory footer defining Dr and Cr balances.
4. Export a Letter-size PDF named `Dues Balances YYYY-MM-DD.pdf`.
5. Inspect the newly created PDF before filing it in `Dues Summary Reports`. Do not substitute an older file merely because its name matches.

## Dues-summary email draft

1. Resolve current officer recipients from the authoritative officer roster; do not use stale examples.
2. Present the proposed subject, recipients, message, and attachment plan for review. The subject format is `SF Fil-Am LC Treasurer - Members Owing Dues as of <Month D, YYYY>`.
3. After approval, create an unsent Gmail draft from `treasurer@{club domain}`, CC the Treasurer role address, and attach only the verified matching report PDF.
4. Verify the sender, recipients, CC, subject, body, attachment filename, and Draft status.

## Dues-summary formatting

When the approved Zoho-style format is requested, use Courier New, the club logo/header, generous spacing, and a bold all-caps title. Include the report date, member count, count of active members with a Dr balance, and the aggregate of individual Dr balances. Do not substitute a net balance where credit balances would reduce the amount owed. Include an editable Notes section and explain that the Closing Balance column shows what a member owes (Dr) or what the club owes the member (Cr).

