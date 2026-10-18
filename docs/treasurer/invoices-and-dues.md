# Invoices

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
