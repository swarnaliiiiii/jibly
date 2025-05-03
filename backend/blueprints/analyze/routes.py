from flask import jsonify, request
from . import analyze_bp

@analyze_bp.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    title = data.get("title","")
    description = data.get("description","")
    user_id = data.get("userId","")

    