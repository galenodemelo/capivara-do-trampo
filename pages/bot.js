export default function Bot() {
    return (
        <div>
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
                chat-title="Capivara do Trampo"
                agent-id="baf92385-6c51-4be6-b5f0-42633cdd1ba9"
                language-code="pt-br"
            ></df-messenger>
        </div>
    )
}