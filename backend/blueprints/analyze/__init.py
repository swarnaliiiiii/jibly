from flask import Blueprint

analyse_bp = Blueprint('analyze',__name__)
from . import routes