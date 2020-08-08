const { IncomingWebhook } = require('ms-teams-webhook');

const webhookUrl = process.env.WEBHOOK_URL
const message = process.env.MESSAGE

const webhook = new IncomingWebhook(webhookUrl);


(async () => {
    await webhook.send(JSON.stringify({
            "@type": "MessageCard",
            "@context": "https://schema.org/extensions",
            "summary": "Issue 176715375",
            "themeColor": "0078D7",
            "title": "Test Message: \"Push notifications not working\"",
            "sections": [
                {
                    "activityTitle": "Test Title",
                    "activitySubtitle": "Test Subtitle",
                    "text": message
                }
            ]
        })
    );
})();