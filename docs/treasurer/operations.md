# Treasurer operational procedures

These are the public operating controls for the Treasurer role. Internal working files contain the detailed, account-specific implementation notes.

## Systems and records

- Zoho Invoice is the club's invoice, payment, and credit-note system.
- The current-year invoice-plan spreadsheet, `Lions Payments`, and `SF Fil-Am Lions Check Register` are the operational records for their respective workflows.
- The current-year action log records every completed Zoho change.

## Non-negotiable controls

- Treat the source records as authoritative. Do not infer unresolved names, amounts, allocations, or batch membership.
- A Gmail draft is not authorization to send. A payment draft is not confirmation of receipt.
- Use the verified Treasurer role sender, formatted publicly as `treasurer@{club domain}`. CC the Treasurer role address on Gmail drafts and sent mail from that address.
- Verify every Zoho change from its resulting detail page or list. Record each completed Zoho action in the current-year action log.
- Do not send an invoice, payment receipt, reimbursement packet, or payment without the required authorization.

## Invoice creation

1. Locate the member's approved current-year invoice-plan row.
2. Confirm the customer, invoice and due dates, membership type, line items, rates, discounts, and total.
3. In Zoho Invoice, select the existing customer; do not create a duplicate because of a spelling variation.
4. Enter the approved lines and preserve standard notes, payment instructions, terms, and template unless a documented exception applies.
5. Save as a draft and verify the assigned invoice identifier, for example `INV-XXX`, customer, dates, amount, and Draft status.
6. Update the plan and action log with the identifier, execution status, timestamp, and concise result.

## Payment registration

1. Read the source-payment record's date, sender, memo, amount, confirmation, and destination.
2. Match each person in a pooled payment to an approved invoice and allocation. Allocations must equal the source transaction total.
3. If any portion is unresolved, process only a separate complete batch; do not force the remainder onto an invoice.
4. Create every allocation as a Zoho draft payment. Use a traceable internal reference pattern such as `Z#XXX`, `C#XXX`, or `C#PENDING X` as appropriate to the payment method and posting state.
5. After Zoho assigns payment identifiers, update the notes and check-register records with the final traceability references.
6. Verify each payment's customer, amount, date, payment mode, allocation, reference, notes, and Draft status before reporting completion.

## Electronic-payment forwarding and reconciliation

The internal workflow connects payment records in this order:

```text
Electronic member payment
→ Lions Payments source sheet
→ per-member Zoho draft-payment allocations
→ payment identifiers and check-register references
→ {Club Treasurer's Personal Account for Electronic Payments}
→ Bill Pay forwarding check to the club
→ final check number replaces pending references
```

1. Complete payment allocations and draft records before preparing any forwarding payment.
2. Prepare one forwarding payment for each complete, reconciled source-payment group. Do not combine unrelated transactions merely to reduce payment count.
3. Prepare a reviewable preview showing source group, amount, memo, `{Club Checking Account}`, and proposed delivery date.
4. Obtain explicit action-time approval for the exact batch before scheduling it.
5. Verify each scheduled Bill Pay item against the approved amount, memo, funding account, payment method, and delivery date.
6. Record the final check reference only when it is available; preserve the accounting-system payment identifier and reconcile the final register entries against the source record and forwarding payment.

## Dues summary reports and email drafts

1. In Zoho Invoice, prepare the Customer Balance Summary using the approved active-member filter, columns, paper size, layout, and explanatory footer.
2. Verify the exported PDF before filing it in `Dues Summary Reports`.
3. Before drafting an email, resolve the current officer recipients from the authoritative officer roster. Present the subject, recipients, content, and attachment plan for review.
4. After approval, create an unsent Gmail draft using the verified Treasurer sender and attach only the matching report PDF.
5. Verify the final draft's sender, Treasurer CC, recipients, subject, body, attachment, and Draft status.

## Quarterly check-register review

1. Confirm the exact Lions Year quarter and inclusive date range. A Lions Year begins July 1.
2. Download final statement files for every club account represented in the quarter's check-register activity. Verify the account, period, opening balance, closing balance, and download recency.
3. Reconcile the quarter's register activity to the statements. Resolve missing statements, unmatched transactions, unexplained balance differences, and unrepresented accounts before drafting a review request.
4. Create an unsent review draft to the Club Auditor and Club Secretary, with the Treasurer role CC. Attach the verified local check-register PDF and only the in-scope bank statements. The live register link is reference-only.
5. Use the approved Courier-styled club template and request a reply within one week with approval or a request for additional information.

## Reimbursement credit notes

1. Identify only Open Zoho credit notes as reimbursement candidates.
2. Reconcile each credit-note line item to one complete receipt bundle. A receipt must support the relevant line item, not merely the note's total.
3. An external verification may replace a receipt only when expressly approved. Record the verified exception in the credit note's Notes section.
4. Give receipt files a descriptive, sequenced name, such as `CRD-XXX Receipt 2 - Vendor Receipt.pdf`. Compare contents before removing a duplicate.
5. Send a credit note through Zoho only when authorized. Use the current officer roster to resolve the required Club Treasurer, Secretary, and Auditor recipients.
6. Create a Gmail review draft in the sent credit-note thread only after the note and receipt bundles have been verified. Attach the same credit-note PDF and exactly one receipt bundle per line item.
7. The review request must state that the Club Auditor or Club Secretary may approve, and request a reply within one week with approval or a request for additional information.

## Public template placeholders

Use role-based placeholders in public examples:

- `{Club Treasurer}`
- `{Club Treasurer's Phone Number}`
- `treasurer@{club domain}`
- `John Smith`, `Jane Smith`, and `Sample Member A`

## Completion report

For completed Treasurer work, report the affected invoice or payment identifiers, customer names, amounts, dates, reference numbers, final statuses, and whether an email was sent. For forwarding batches, report scheduled payment count and total, delivery date, memo, and confirmation result. List unresolved records separately; do not describe them as completed.
