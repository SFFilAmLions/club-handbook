# Treasurer email templates

Use these templates only after the relevant records and attachments have been verified. A draft does not authorize sending. Send from `treasurer@{club domain}` and CC the Treasurer role address.

## Rendering rules

The templates below are the canonical Markdown source. For a Gmail draft, render the Markdown as HTML and apply Courier New to the message body. Only the outer wrapper and logo require HTML:

```html
<div style="font-family: 'Courier New', monospace; white-space: pre-wrap;">
  <img src="{Club Logo URL}" alt="San Francisco Fil-Am Lions Club" style="max-height: 50px; width: auto;"><br><br>
  <!-- rendered Markdown body -->
</div>
```

## Quarterly check-register review request

```markdown
San Francisco Fil-Am Lions Club
Office of the Treasurer

# QUARTERLY CHECK REGISTER REVIEW REQUEST

Review Period   {Lions Year Quarter — Start Date to End Date}
Register Tab    {Register Tab Name}

**CHECK REGISTER PDF ATTACHED**
{Check Register PDF Filename}

**STATEMENTS ATTACHED    {Count}**

{Bank / Account — Statement Period — Attachment Filename}
{Bank / Account — Statement Period — Attachment Filename}

Live Check Register
[SF Fil-Am Lions Check Register]({Check Register URL})

Dear Club Auditor and Club Secretary,

Please review the check-register activity for the stated quarter against the attached bank statements and the live check register. Please reply by email within one week with either approval or a request for additional information.

For any questions, please contact:

{Club Treasurer}
treasurer@{club domain}
{Club Treasurer's Phone Number}
{Club Website}
```

## Reimbursement credit review request

Use as a reply in the sent credit-note thread. Attach the credit-note PDF and exactly one verified receipt bundle per line item.

```markdown
San Francisco Fil-Am Lions Club
Office of the Treasurer

# REIMBURSEMENT CREDIT REVIEW REQUEST

Member          {Member Name}
Credit No       CRD-XXX
Credit Ref      {Reference}
Credit Date     {YYYY-MM-DD}
**TOTAL CREDIT    ${Amount}**

Dear Club Auditor and Club Secretary,

Please review this reimbursement credit and the attached supporting receipts. Please reply by email within one week with either approval or a request for additional information.

The Club Auditor or Club Secretary may provide approval. If no approval or request for additional information is received within one week, the reimbursement will be processed.

<!-- Optional: The {External Verifier} contribution has been verified by {External Verifier}; no receipt is required for that portion. -->

For any questions, please contact:

{Club Treasurer}
treasurer@{club domain}
{Club Treasurer's Phone Number}
{Club Website}
```

## Dues-summary request

Use the approved subject format:

```text
SF Fil-Am LC Treasurer - Members Owing Dues as of {Month D, YYYY}
```

```markdown
San Francisco Fil-Am Lions Club
Office of the Treasurer

# MEMBERS OWING DUES

Report Date       {Month D, YYYY}
Active Members    {Count}
Members with Dr   {Count}
**TOTAL AMOUNT DUE    ${Amount}**

## NOTES


## CLOSING BALANCE

The Closing Balance column is the rightmost column in the attached report. It shows what a member owes the club (Dr), or what the club owes the member (Cr), to date.

Please acknowledge receipt by email reply.
```

Attach only the verified matching `Dues Balances YYYY-MM-DD.pdf` report.
